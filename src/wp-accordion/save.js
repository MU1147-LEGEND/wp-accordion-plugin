import { useBlockProps } from "@wordpress/block-editor";

const blockStyle = {
	border: "1px solid #ccc",
	padding: "10px",
	borderRadius: "5px",
	backgroundColor: "#f9f9f9",
	color: "#333",
};

const titleStyle = { textAlign: "center", fontWeight: "600" };

export default function save({ attributes }) {
	const title = attributes.title;
	const items = attributes.items || [];
	const backgroundColor = attributes.backgroundColor || "#ffffff";
	const textColor = attributes.textColor || "#0000ff";
	const individualItemBgColor = attributes.individualItemBgColor || false;

	return (
		<div {...useBlockProps.save()} style={blockStyle}>
			<h3 style={titleStyle}>{title}</h3>

			<div className="wp-accordion-items">
				{items.map((item, index) => {
					const bgColor = individualItemBgColor
						? item.backgroundColor || backgroundColor
						: backgroundColor;

					const checkboxId = `accordion-${index}`;

					return (
						<div
							key={index}
							style={{ marginBottom: "5px", border: "1px solid #ccc" }}
						>
							<input
								type="checkbox"
								id={checkboxId}
								className="acc-checkbox"
								style={{ display: "none" }}
							/>
							<label
								htmlFor={checkboxId}
								style={{
									cursor: "pointer",
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									padding: "4px 10px",
									borderBottom: "1px solid #ccc",
									backgroundColor: bgColor,
									margin: 0,
								}}
								className="acc-item"
							>
								<h4 style={{ color: textColor, margin: 0 }}>{item.title}</h4>
								<span
									style={{ fontSize: "20px", fontWeight: "bold" }}
									className="acc-icon"
								>
									▶
								</span>
							</label>
							<div className="acc-content">
								<p
									style={{
										color: textColor,
										backgroundColor: bgColor,
										padding: "6px 10px",
										margin: "2px auto",
										fontSize: "16px",
									}}
								>
									{item.description}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
