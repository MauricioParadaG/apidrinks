import React, {useContext, useState} from 'react';
import {ModalContext} from '../context/Modal.context.js';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


  
  function getModalStyle() {
    const top = 50 ;
    const left = 50 ;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 540,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));



  ////////////////////////////////////
  ////////////////////////////////////
  
  


const RecipeComponent = props => {

    // Material-UI
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }

    const {setIdModalRecipeState} = useContext(ModalContext);

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{props.recipesState.strDrink}</h2>

                <img className="card-img-top" src={props.recipesState.strDrinkThumb} alt={`Drink pic of ${props.recipesState.strDrink}`} />
            </div>

            <div className="card-body">
                <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={() => {
                    setIdModalRecipeState(props.recipesState.idDrink);
                    handleOpen();
                }}
                >
                    View Recipe
                </button>

                <Modal
                    open={open}
                    onClose={() =>{
                        setIdModalRecipeState(null),
                        handleClose();
                    }}
                >
                <div style={modalStyle}
                className={classes.paper}>
                    <h1>From Modal</h1>
                </div>

                </Modal>
            </div>

        </div>
    )
}

export default RecipeComponent;
