import Parser from "rss-parser";

const RSS_URL =
    "https://www.coindesk.com/arc/outboundfeeds/rss/";

const parser = new Parser({
    customFields: {
        item: [
            ["media:content", "mediaContent", { keepArray: true }],
            ["dc:creator", "creator"],
            ["category", "categories", { keepArray: true }],
        ],
    },
});


/**
 * Convert RSS date into a clean display date
 * Example:
 * August 13, 2026
 */
function formatDate(date) {
    if (!date) return "";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
        return "";
    }

    return parsedDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
}


/**
 * Convert RSS category into a plain string.
 *
 * CoinDesk RSS can return category like:
 *
 * "Finance"
 *
 * or:
 *
 * {
 *   _: "Finance",
 *   $: {
 *      domain: "..."
 *   }
 * }
 */
function normalizeCategory(category) {
    if (!category) {
        return "";
    }

    if (typeof category === "string") {
        return category.trim();
    }

    if (
        typeof category === "object" &&
        typeof category._ === "string"
    ) {
        return category._.trim();
    }

    return "";
}


/**
 * Get the first useful category
 */
function getCategory(categories) {
    if (!Array.isArray(categories)) {
        return "News";
    }

    const normalizedCategories = categories
        .map(normalizeCategory)
        .filter(Boolean);

    const category =
        normalizedCategories.find(
            (item) =>
                item.toLowerCase() !== "news"
        ) || "News";

    return category;
}


/**
 * Get CoinDesk image
 */
function getImage(item) {
    const media = item.mediaContent?.[0];

    // media:content
    if (
        media &&
        typeof media === "object" &&
        media.$ &&
        typeof media.$.url === "string"
    ) {
        return media.$.url;
    }

    // fallback: enclosure
    if (
        item.enclosure &&
        typeof item.enclosure.url === "string"
    ) {
        return item.enclosure.url;
    }

    return "";
}


/**
 * Fetch CoinDesk RSS
 *
 * Cached for 24 hours.
 */
export async function getCoinDeskNews() {

    try {

        const response = await fetch(
            RSS_URL,
            {
                next: {
                    revalidate: 25200, // 7 hours
                },
            }
        );

        if (!response.ok) {
            throw new Error(
                `CoinDesk RSS request failed: ${response.status}`
            );
        }

        const xml =
            await response.text();

        const feed =
            await parser.parseString(xml);


        const articles =
            feed.items
                .map((item) => {

                    const categories =
                        Array.isArray(item.categories)
                            ? item.categories
                            : [];


                    const title =
                        typeof item.title === "string"
                            ? item.title.trim()
                            : "";


                    const url =
                        typeof item.link === "string"
                            ? item.link.trim()
                            : "";


                    const description =
                        typeof item.contentSnippet === "string"
                            ? item.contentSnippet.trim()
                            : typeof item.description === "string"
                                ? item.description.trim()
                                : "";


                    const image =
                        getImage(item);


                    const publishedAt =
                        typeof item.pubDate === "string"
                            ? item.pubDate
                            : "";


                    const author =
                        typeof item.creator === "string"
                            ? item.creator.trim()
                            : typeof item.author === "string"
                                ? item.author.trim()
                                : "CoinDesk";


                    const category =
                        getCategory(categories);


                    const guid =
                        typeof item.guid === "string"
                            ? item.guid
                            : url;


                    return {

                        guid,

                        title,

                        url,

                        description,

                        image,

                        published_at:
                            publishedAt,

                        published_date:
                            formatDate(
                                publishedAt
                            ),

                        author,

                        source:
                            "CoinDesk",

                        category,
                    };
                })


                // Remove invalid articles
                .filter(
                    (article) =>
                        article.title &&
                        article.url
                )


                // Latest 20 articles
                .slice(0, 20);


        return articles;

    } catch (error) {

        console.error(
            "CoinDesk RSS Error:",
            error
        );

        return [];

    }
}