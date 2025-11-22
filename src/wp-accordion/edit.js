import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import {
	Button,
	ColorPalette,
	PanelBody,
	TextControl,
	ToggleControl,
} from "@wordpress/components";

import { __ } from "@wordpress/i18n";
import "./editor.scss";

// styles
const blockStyle = {
	border: "1px solid #ccc",
	padding: "4px 10px",
	borderRadius: "5px",
	backgroundColor: "#f9f9f9",
	color: "#333",
};
const titleStyle = { textAlign: "center", fontWeight: "600" };
const itemBoxStyle = {
	border: "1px solid #ddd",
	padding: "10px",
	margin: "5px 0",
	backgroundColor: "#fff",
	borderRadius: "4px",
};
export const faqStyle = {};
// styles end

export default function Edit({ attributes, setAttributes }) {
	const title = attributes.title;
	const items = attributes.items || [];
	const textColor = attributes.textColor || "#0000ff";
	// dynamic styles
	faqStyle.backgroundColor = attributes.backgroundColor || "#ffffff";
	faqStyle.color = attributes.textColor || "#0000ff";
	faqStyle.individualItemBgColor = attributes.individualItemBgColor || false;
	// dynamic styles end
	const updateItem = (index, field, value) => {
		const newItems = [...items];
		newItems[index][field] = value;

		setAttributes({ items: newItems });
	};

	const addItem = () => {
		const newItems = [
			...items,
			{
				title: `Accordion Title ${items.length + 1}`,
				description: `Accordion Description ${items.length + 1}`,
			},
		];

		setAttributes({ items: newItems });
	};

	const removeItem = (index) => {
		const newItems = items.filter((_, i) => i !== index);
		setAttributes({ items: newItems });
	};

	const domain = "wp-accordion";

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Settings", domain)} initialOpen={true}>
					<TextControl
						label={__("Main Title", domain)}
						value={title}
						placeholder={__("Name of your accordion", domain)}
						onChange={(newTitle) => {
							setAttributes({ title: newTitle });
						}}
					/>
					{/* text color control */}
					<div>
						<label
							style={{
								display: "block",
								marginBottom: "5px",
								textTransform: "uppercase",
							}}
						>
							{__("Text Color", domain)}
						</label>
						<ColorPalette
							value={attributes.textColor}
							onChange={(value) => setAttributes({ textColor: value })}
						/>
					</div>
					{/* background color control */}
					<div style={{ marginBottom: "10px" }}>
						<label
							style={{
								display: "block",
								marginBottom: "5px",
								textTransform: "uppercase",
							}}
						>
							{__("Background Color", domain)}
						</label>
						<ColorPalette
							value={attributes.backgroundColor}
							onChange={(value) => setAttributes({ backgroundColor: value })}
						/>
					</div>
					{/* bg color control end */}
					{/* individual item background color control toggler */}
					<ToggleControl
						className="no-select"
						label={__("Individual Item Background Color", domain)}
						checked={attributes.individualItemBgColor || false}
						onChange={(value) =>
							setAttributes({ individualItemBgColor: value })
						}
					/>

					<hr />
					<h3>{__("Accordion Items", domain)}</h3>

					{items.map((item, index) => (
						<div key={index} style={itemBoxStyle}>
							<TextControl
								label={`${__("Title", domain)} ${index + 1}`}
								value={item.title}
								placeholder={__("Accordion title", domain)}
								onChange={(value) => updateItem(index, "title", value)}
							/>
							<TextControl
								label={`${__("Description", domain)} ${index + 1}`}
								value={item.description}
								placeholder={__("Accordion description", domain)}
								onChange={(value) => updateItem(index, "description", value)}
							/>
							{attributes.individualItemBgColor && (
								<div style={{ marginBottom: "10px" }}>
									<label style={{ display: "block", marginBottom: "5px" }}>
										{`${__("Background Color", domain)} ${index + 1}`}
									</label>
									<ColorPalette
										value={item.backgroundColor}
										onChange={(value) =>
											updateItem(index, "backgroundColor", value)
										}
									/>
								</div>
							)}

							<Button
								isDestructive
								onClick={() => removeItem(index)}
								style={{
									marginTop: "5px",
									backgroundColor: "#ff4d4d",
									borderColor: "#ff4d4d",
									color: "#fff",
								}}
							>
								{__("Remove", domain)}
							</Button>
						</div>
					))}

					<Button isPrimary onClick={addItem} style={{ marginTop: "10px" }}>
						{__("Add Item", domain)}
					</Button>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()} style={blockStyle}>
				<FinalBlock title={title} items={items} />
			</div>
		</>
	);
}

export const FinalBlock = ({ title, items }) => {
	return (
		<>
			<h3 style={titleStyle}>{title}</h3>

			<div>
				{items &&
					items.map((item, index) => (
						<AccordionItem key={index} item={item} index={index} />
					))}
			</div>
		</>
	);
};

const AccordionItem = ({ item, index }) => {
	const { title, description, backgroundColor } = item;
	const bgColor = faqStyle.individualItemBgColor
		? backgroundColor || "#ffffff"
		: faqStyle.backgroundColor;

	const checkboxId = `accordion-${index}`;

	return (
		<div style={{ marginBottom: "5px", border: "1px solid #ccc" }}>
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
				<h4 style={{ color: faqStyle.color, margin: 0 }}>
					{__(title, "wp-accordion")}
				</h4>

				<span
					style={{
						fontSize: "20px",
						fontWeight: "bold",
						color: faqStyle.color,
					}}
					className="acc-icon"
				>
					▶
				</span>
			</label>
			<div
				className="acc-content"
				style={{ height: "auto", overflow: "hidden" }}
			>
				<p
					style={{
						color: faqStyle.color,
						backgroundColor: bgColor,
						padding: "6px 10px",
						margin: "2px auto",
						fontSize: "16px",
					}}
				>
					{__(description, "wp-accordion")}
				</p>
			</div>
		</div>
	);
};
