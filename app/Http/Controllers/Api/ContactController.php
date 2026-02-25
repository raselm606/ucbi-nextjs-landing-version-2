<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use App\Models\Subscriber;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
     public function index()
    {
        $data = Contact::all();
        return response()->json($data, 200);
    }
    public function Contactstore(Request $request)
    {
        // 1) Normalize / clean input (trim, strip html)
    $clean = [
        'name'     => strip_tags(trim((string) $request->input('name'))),
        'email'    => strtolower(trim((string) $request->input('email'))),
        'country'    => strtolower(trim((string) $request->input('country'))),
        'phone'    => strip_tags(trim((string) $request->input('phone'))),
        'subject'  => strip_tags(trim((string) $request->input('subject'))),
        'comments' => trim((string) $request->input('comments')),
    ];

    // comments থেকে HTML পুরো বাদ (allow nothing)
    $clean['comments'] = strip_tags($clean['comments']);

    // extra: whitespace normalize
    $clean['name']     = preg_replace('/\s+/', ' ', $clean['name']);
    $clean['country']     = preg_replace('/\s+/', ' ', $clean['country']);
    $clean['subject']  = preg_replace('/\s+/', ' ', $clean['subject']);
    $clean['comments'] = preg_replace('/\s+/', ' ', $clean['comments']);

    // 2) Validate cleaned data
    $validator = Validator::make($clean, [
        'name'     => ['required','string','min:2','max:100', "regex:/^[\pL\pM\.\-'\s]+$/u"],
        'email'    => ['required','email:rfc,dns','max:150'],
        'country'  => ['nullable','string','max:60'],
        'phone'    => ['nullable','string','max:30', "regex:/^[0-9+\-\s()]{6,30}$/"],
        'subject'  => ['nullable','string','max:60'],
        'comments' => ['required','string','min:5','max:2000'],
    ], [
        'name.regex'  => 'Name contains invalid characters.',
        'phone.regex' => 'Phone format is invalid.',
    ]);

    if ($validator->fails()) {
        return response()->json([
            'status' => false,
            'errors' => $validator->errors(),
        ], 422);
    }

    // 3) Extra anti-spam: link block (optional but effective)
    if (preg_match('/https?:\/\/|www\./i', $clean['comments'] . ' ' . ($clean['subject'] ?? ''))) {
        return response()->json([
            'status' => false,
            'msg' => '❌ Links are not allowed in message. Remove link and try again',
        ], 422);
    }

    // 4) Save
    $contact = Contact::create([
        'name'       => $clean['name'],
        'email'      => $clean['email'],
        'country'      => $clean['country'],
        'phone'      => $clean['phone'] ?: null,
        'subject'    => $clean['subject'] ?: null,
        'comments'   => $clean['comments'],
        'ip_address' => $request->ip(),
        // চাইলে user agent-ও রাখতে পারো:
        // 'user_agent' => substr((string)$request->userAgent(), 0, 255),
    ]);

    return response()->json([
        'status' => true,
        'msg' => '✅ We have received your message. We will get back to you soon.',
        'data' => $contact
    ], 201);
    }

    public function Subscriberstore(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email' => 'required|email|max:150|unique:subscribers,email',
        ], [
            'email.unique' => '❌ This email is already subscribed.',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
            ], 422);
        }

        try {
        $subscriber = Subscriber::create([
            'email' => strtolower(trim($request->email)),
            'ip_address' => $request->ip(),
        ]);

        return response()->json([
            'status' => true,
            'msg' => '✅ We have received your Email!',
            'data' => $subscriber
        ], 201);

    } catch (\Illuminate\Database\QueryException $e) {
        // DB unique hit করলে (edge case)
        return response()->json([
            'status' => false,
            'msg' => '❌ This email is already subscribed.',
        ], 422);
    }
    }

    public function ucSubscriber()
    {
        $data = Subscriber::all();
        return response()->json($data, 200);
    }
}
