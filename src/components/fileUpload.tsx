export default function FileUpload({ fileType }: { fileType: string }) {
  return (
    <>
      <input
        type="file"
        id="file"
        className="display-none"
        name="file"
        accept={fileType}
      ></input>
      <label htmlFor="file" className="upload">
        Upload a file
      </label>
    </>
  );
}
