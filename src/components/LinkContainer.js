import React from 'react'
import {Item} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default props =>(
<Item link href={props.url}>

  <Item.Image size = "small" src = {props.img}/>
  <Item.Content verticalAlign='middle'>
  <Item.Header>{props.title}</Item.Header>
  <Item.Description>{props.description}</Item.Description>
</Item.Content>
</Item>
)
