// import React from 'react';
// import classes from './deleteAllTasks.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrashAlt, faUndo } from '@fortawesome/free-solid-svg-icons';

// class DeleteAllTasks extends React.Component {
//     deleteAllTasks = () => {
//         this.props.undo.display = 'block';
//         this.props.deleteAllTasks();
//     }
//     returnPrevTasks = () => {
//         this.props.undo.display = 'none';
//         this.props.returnDeletedTasks();
//     }
//     render() {
//         return (
//             <div className={classes.deleteAllTasks}>
//                 <div>
//                     <FontAwesomeIcon title="Remove all tasks!" onClick={this.deleteAllTasks} className={classes.trashCan} icon={faTrashAlt} />
//                 </div>
//                 <div style={{ display: this.props.undo.display }}>
//                     <FontAwesomeIcon title="Restore deleted tasks!" onClick={this.returnPrevTasks} className={classes.undo} icon={faUndo} />
//                 </div>
//             </div>
//         );
//     }  
// }

// export default DeleteAllTasks;