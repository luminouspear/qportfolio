import ReactQuill from "react-quill";

export default function Editor({ value, onChange }) {
	const toolbarOptions = [
		["bold", "italic", "underline", "strike"], // toggled buttons
		["blockquote", "code-block"],
		["link", "image", "video"],
		[({ header: 1 }, { header: 2 })], // custom button values
		[{ list: "ordered" }, { list: "bullet" }],
		[{ script: "sub" }, { script: "super" }], // superscript/subscript
		[{ indent: "-1" }, { indent: "+1" }], // outdent/indent

		[{ size: ["small", false, "large", "huge"] }], // custom dropdown
		[{ header: [1, 2, 3, 4, 5, 6, false] }],

		[{ color: ["#0c0e07", "#122111", "#2FB1A2"] }, { background: [] }], // dropdown with defaults from theme
		[{ font: ["Gloock", "Activo"] }],
		[{ align: [] }],

		["clean"], // remove formatting button
	];

	const modules = {
		toolbar: toolbarOptions,
	};

	return <ReactQuill value={value} onChange={onChange} modules={modules} />;
}
