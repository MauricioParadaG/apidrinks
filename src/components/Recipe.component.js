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
  

  const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      [theme.breakpoints.down('sm')]: {
        width: '100%',  
      },
      [theme.breakpoints.up('sm')]: {
        width: 430,  
      },
      maxHeight: 500,
      overflowY: 'auto',
      backgroundColor: theme.palette.background.paper,
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

    const {apiAnswer, setApiAnswerState, setIdModalRecipeState} = useContext(ModalContext);

    //console.log(apiAnswer);

    const showRecipeIngredients = apiAnswer => {
        let recipeIngredients = [];
        for(let i=1; i < 16; i++){
            if(apiAnswer[`strIngredient${i}`]){
                recipeIngredients.push(
                <li key={i}>{apiAnswer[`strIngredient${i}`]} {apiAnswer[`strMeasure${i}`]}</li>
                )
            }
        }

        return recipeIngredients;
    }

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
                        setIdModalRecipeState(null);
                        setApiAnswerState({});
                        handleClose();
                    }}
                >
                <div style={modalStyle}
                className={classes.paper}>
                    <h2>{apiAnswer.strDrink}</h2>
                    <h3 className="mt-4">How to prepare it!</h3>
                    <p>{apiAnswer.strInstructionsDE}</p>
                
                    <img className="img-fluid my-4" src={apiAnswer.strDrinkThumb} alt="Ingridients"/>

                    <h3>Recipe</h3>
                    <ul>
                        {showRecipeIngredients(apiAnswer)}
                    </ul>

                </div>

                </Modal>
            </div>

        </div>
    )
}

export default RecipeComponent;
