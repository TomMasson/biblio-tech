import Link from "next/link";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./table.module.scss";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const StyledTableCell = styled(TableCell)(({}) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: "black",
		color: "white",
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));

const TableComponent = ({ headers, items }) => {
	return (
		<div className={styles.container}>
			<TableContainer
				component={Paper}
				className={styles.muiTableContainer}
			>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead className={styles.tableHead}>
						<StyledTableRow>
							{headers.map((header) => (
								<TableCell
									key={header}
									className={styles.header}
									align="center"
								>
									{header}
								</TableCell>
							))}
						</StyledTableRow>
					</TableHead>
					<TableBody>
						{items.map((item) => {
							return (
								<StyledTableRow
									key={item.id}
									sx={{
										"&:last-child td, &:last-child th": {
											border: 0,
										},
									}}
								>
									<StyledTableCell
										component="th"
										scope="row"
										className={styles.tableCell}
										align="center"
									>
										{item.data1}
									</StyledTableCell>
									<StyledTableCell
										className={styles.tableCell}
										align="center"
									>
										{item.data2}
									</StyledTableCell>
									<StyledTableCell
										className={`${styles.tableCell} ${styles.actions}`}
										align="center"
									>
										<Link href={item.actions.edit}>
											<EditIcon />
										</Link>
										<Link href={item.actions.delete}>
											<DeleteForeverIcon />
										</Link>
									</StyledTableCell>
								</StyledTableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default TableComponent;
