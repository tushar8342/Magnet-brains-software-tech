import "./App.css";
import { DropzoneArea } from "material-ui-dropzone";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { Button } from "@material-ui/core";
function App() {
  const [open, setOpen] = useState(false);
  const useStyles = makeStyles((theme) =>
    createStyles({
      previewChip: {
        minWidth: 160,
        maxWidth: 210,
      },
    })
  );
  const classes = useStyles();
  return (
    <div className="App">
      <DropzoneArea
        showPreviews={true}
        showPreviewsInDropzone={false}
        useChipsForPreview
        previewGridProps={{ container: { spacing: 1, direction: "row" } }}
        previewChipProps={{ classes: { root: classes.previewChip } }}
        previewText="Selected files"
      />

      <br />

      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Add File
      </Button>
    </div>
  );
}

export default App;
