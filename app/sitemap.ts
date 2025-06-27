import { MetadataRoute } from "next";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: `${process.env.NEXT_BASE_URL}/resume`,
        },
        {
            url: `${process.env.NEXT_BASE_URL}/generate-qr-code`,
        }
    ];
}