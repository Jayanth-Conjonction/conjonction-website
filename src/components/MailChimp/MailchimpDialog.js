import { Dialog, DialogContent, IconButton } from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "../common/Typography";
import MailchimpSubscribe from "./MailchimpSubscribe";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
  closeButton: {
    color: theme.palette.grey[500],
  },
}));

export default function MailChimpDialog({ open, onClose }) {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <MuiDialogTitle disableTypography className={classes.root}>
        <Typography className={classes.title} variant="h6">
          Plus d'informations
        </Typography>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </MuiDialogTitle>
      <DialogContent>
        <MailchimpSubscribe
          handleClose={onClose}
          url={process.env.REACT_APP_MAILCHIMP_URL}
        />
      </DialogContent>
    </Dialog>
  );
}
