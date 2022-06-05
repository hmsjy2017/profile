import Config from "~/model/config";
import {
    faGithub,
    faQq,
    faTelegram,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const config: Config = {
    siteName: "Tony's Profile",
    owner: {
        name: "Tony",
        email: "i@iamsjy.com",
        description: "I have poor ability.",
    },
    SEO: {
        description:
            "这是 Tony 的个人主页，向您详细介绍关于 Tony 的相关信息、学习与生活。",
    },
    CDN: {
        gravatar: "avatar.sourcegcdn.com",
    },
    social: [
        {
            name: "Twitter",
            icon: faTwitter,
            href: "https://twitter.com/hmsjy2017",
        },
        {
            name: "Telegram",
            icon: faTelegram,
            href: "https://t.me/hmsjy2017",
        },
        {
            name: "GitHub",
            icon: faGithub,
            href: "https://github.com/hmsjy2017",
        },
        {
            name: "Email",
            icon: faEnvelope,
            href: "mailto:i@iamsjy.com",
        },
    ],
};

export default config;
