import { registerBlockType } from "@wordpress/blocks";

import "./style.scss";

import metadata from "./block.json";
import Edit from "./edit";
import icon from "./icon";
import save from "./save";

registerBlockType(metadata.name, {
	icon,
	edit: Edit,
	save,
});
