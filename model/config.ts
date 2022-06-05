import ListItem from "~/model/listItem";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

export default interface Config {
    siteName: string;
    owner: {
        name: string;
        email: string;
        description: string;
    };
    SEO: {
        description: string;
    };
    CDN?: {
        gravatar?: string;
    };
    social?: ListItem<IconDefinition>[];
}
