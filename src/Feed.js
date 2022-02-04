import React from "react";
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import InputItems from './InputItems';
import Posts from './Post'


function Feed(){
  return(
    <div className="feed_container">
       <div className="container">
          <div className="input_container">
            <CreateIcon/>
              <form>
              <input type='text'/>
              
              <button type="submit">hello</button>
              
              </form>

          </div>
            <div className="input_items">
                <InputItems Icon={ImageIcon} title='Photo' color='#70B5F9'/>
                <InputItems Icon={SubscriptionsIcon} title='Video' color='#E7A33E'/>
                <InputItems Icon={EventNoteIcon} title='Event' color='#E7A33E'/>
                <InputItems Icon={CalendarViewDayIcon} title='Write Article' color='#E7A33E'/>
                
          </div>
       </div>
       <Posts 
          name='harsh pratap'
          description='this is a description'
          message='hi i am harsh'
       />
    </div>
  )
}

export default Feed;