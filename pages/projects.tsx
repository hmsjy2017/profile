import type { GetStaticProps, NextPage } from "next";
import { Box, Paper } from "@mui/material";
import Layout from "~/components/Layout";
import Markdown from "~/components/Markdown";
import * as fs from "fs";
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
} from "@mui/lab";
import { useAppDispatch } from "~/redux/hooks";
import { useEffect } from "react";
import { setTitle } from "~/redux/reducers/viewUpdate";

// noinspection JSUnusedGlobalSymbols
export const getStaticProps: GetStaticProps = async () => {
    const post = fs.readFileSync("./source/pages/projects.md").toString("utf8");

    return {
        props: {
            post,
        },
    };
};

const projects: NextPage<{ post: string }> = (props) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setTitle("projects"));
    }, [dispatch]);

    return (
        <Layout>
            <Paper
                sx={{
                    minHeight: "60vh",
                }}
            >
                <Box padding={3} component={"article"} width={"100%"}>
                    <Markdown>{props.post}</Markdown>
                </Box>
                <Timeline>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            {"2021.10 ~ Now"}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Raspbian Addons</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            {"2022.5 ~ Now"}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent>FreeForDev</TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Paper>
        </Layout>
    );
};

export default projects;
