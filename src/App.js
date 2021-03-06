import { registerRootComponent } from 'expo';
import React from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import AlbumList from './components/AlbumList';

const App = () => (
	<View style={{ flex: 1 }}>		
  		<Header headerText={'Artist Albums'} />
  		<AlbumList />
  	</View>
);
  
registerRootComponent(App);