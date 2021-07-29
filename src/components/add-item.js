import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/actions';

class AddItem extends React.Component {
   constructor(props) {
      super(props)
      this.state={
         username: '',
         text: '',
         date: '',
         id: ''
      }
   }

   /* componentDidMount() {
      const items = localStorage.getItem("items");
      if (items) this.setState({ items: JSON.parse(items) });
   } */

   submitHandler = ev => {
      ev.preventDefault();

      const { username, text } = this.state;

      if (!username.trim()) {
         alert('Введите свое имя!');
         return;
      }
      else if (!text.trim()) {
         alert('Введите сообщение!');
         return;
      }


      const newPost = {
         username,
         text,
         date: new Date().toLocaleString(),
         id: Date.now().toString()
      }

      this.props.createPost(newPost)

      this.setState(() => ({
         username: '',
         text: ''
      }));
   }

   changeInputHandler = ev => {
      ev.persist()
      this.setState(prev => ({...prev, ...{
         [ev.target.name]: ev.target.value
      }}))
   }

   render() {
      return (
         <form className="form" onSubmit={this.submitHandler}>
            <div className="message-wrap">
               <label htmlFor="new-author">Ваше имя</label>
               <input type="text" id="new-author"
                  name="username"
                  value={this.state.username}
                  onChange={this.changeInputHandler} />

               <label htmlFor="new-message">Введите сообщение!</label>
               <input type="text" id="new-message"
                  name="text"
                  value={this.state.text}
                  onChange={this.changeInputHandler} />
               
               <button className="button" type="submit">Отправить</button>
            </div>
         </form>
      );
   }
}

const mapDispatchToProps =  {
   createPost
}

export default connect(null, mapDispatchToProps)(AddItem);