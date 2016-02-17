import React from 'react'
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

export const Dashboard = React.createClass({
  render() {
   return (
      <div>
        <LeftNav open={true}>
          <List subheader="Nested List Items">
            <ListItem key={6} primaryText="Users" />
            <ListItem key={5} primaryText="Messages" initiallyOpen={true} primaryTogglesNestedList={true} nestedItems={[
                <ListItem
                  key={1}
                  primaryText="Inbox" />,
                <ListItem
                  key={2}
                  primaryText="Sent"/>,
                <ListItem
                  key={3}
                  primaryText="Starred" />,
                <ListItem
                  key={4}
                  primaryText="Spam" />,
              ]}
            />
          </List>
        </LeftNav>
      </div>
    )
  }
})

