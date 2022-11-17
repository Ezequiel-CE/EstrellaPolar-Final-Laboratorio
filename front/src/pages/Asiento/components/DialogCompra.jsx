import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function FinalizacionDialog(props) {
  const { open, finalizar } = props;

  const handleClose = () => {
    finalizar();
  };

  return (
    <div>
      <Dialog
        open={open}
        aria-describedby="alert-dialog-description"
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Seleccion confirmada. Gracias por la compra!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Salir
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
