// import { Web3Storage, getFilesFromPath } from "web3.storage";
// import { IncomingForm } from "formidable";
// import { join } from "path";
// const token = process.env.REACT_APP_WEB3_API_TOKEN;
// const client = new Web3Storage({ token });

// // function ro check types of file
// const checkFileType = (file) => {
// 	// file like abc/png => abc.png
// 	const type = file.type.split("/").pop();
// 	const validTypes = ["png", "jpg", "jpeg"];
// 	if (validTypes.indexOf(type) == -1) {
// 		return false;
// 	} else {
// 		return true;
// 	}
// };

// async function ipfs_upload(req, res) {
// 	//parse the form in own way
// 	const uploadFolder = join(__dirname, "dist", "uploads");
// 	try {
// 		const form = new IncomingForm();
// 		form.multiples = false;
// 		form.uploadDir = uploadFolder;
// 		form.parse(req, async (err, fields, files) => {
// 			if (err) {
// 				return res.json({ ok: false, msg: "falied parsing" });
// 				console.log(err);
// 			} else {
// 				const file = files.file;
// 				// checking types of file  ---> checkFileType(file) returns true or false
// 				if (!checkFileType(file)) {
// 					return res.json({ ok: false, msg: "falied file type" });
// 				} else {
// 					try {
// 						await fs.renameAs;
// 					} catch {}
// 				}
// 			}
// 		});
// 	} catch {}
// }

// export default ipfs_upload;
