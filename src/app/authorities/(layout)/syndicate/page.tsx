import React from "react";
import Content from "./_components/content";

import { generateMetaData } from "@/lib/utils";
import { getAuthoritiesSyndicate } from "@/server/get-authorities";

export const metadata = generateMetaData({
	title: "Syndicate",
	description: "The syndicate of the European University of Bangladesh",
});

const Page = async () => {
	const data = await getAuthoritiesSyndicate();

	return <Content data={data} />;
};

export default Page;
