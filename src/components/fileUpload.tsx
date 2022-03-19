export default function FileUpload({
  fileType,
  onFileSelect,
  loading,
}: {
  fileType: string;
  onFileSelect: (f: any) => void;
  loading: boolean;
}) {
  const handleFileInput = (e: any) => {
    // handle validations
    onFileSelect(e.target.files[0]);
  };
  return (
    <>
      <input
        type="file"
        id="file"
        className="display-none"
        name="file"
        accept={fileType}
        onChange={handleFileInput}
      ></input>
      <label
        htmlFor="file"
        className={`upload ${loading && "wait spin round"}`}
      >
        {!loading && "yuh"}
      </label>
    </>
  );
}
