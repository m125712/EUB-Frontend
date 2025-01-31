import Link from "next/link";
import React from "react";

import SystemTable, {
	SystemTableColumn,
} from "@/components/table/system-table";
import { formatDate } from "@/lib/utils";
import { getEveningClassRoutine } from "@/server/get-courses";
import { IDataTable } from "@/types";
import ContentWrapper from "../content-wrapper";

const data = await getEveningClassRoutine("CSE");
console.log(data);
const columns: SystemTableColumn<IDataTable>[] = [
	{
		accessorKey: "description",
		cell: (value, row) => {
			return (
				<Link
					className="underline text-primary font-medium"
					href={row.file}
				>
					{value}
				</Link>
			);
		},
	},
	{
		accessorKey: "updated_at",
		cell: (value, row) => formatDate(value || row.created_at),
	},
];

const ClassRoutine = () => {
	return (
		<ContentWrapper title="Class Routine">
			<SystemTable
				caption="Class Routine"
				data={data}
				columns={columns}
			/>
		</ContentWrapper>
	);
};

export default ClassRoutine;
