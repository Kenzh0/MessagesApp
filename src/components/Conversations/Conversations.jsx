import React from 'react'
import ConversationItem from './ConversationItem'

import { colors } from '../../../constants'
import { View } from 'react-native'

export const conversations = [
	{
		image:
			'https://www.exibartstreet.com/wp-content/uploads/avatars/2465/5e0de52aeee8b-bpfull.jpg',
		name: 'Arman',
		text: 'The unseen of spending three',
		time: '09:11',
		userId: 'PaQhyjTlfGXeJD3NWfskLQNzgPv2',
	},
	{
		image: 'https://legamart.com/avatars/Bruce.jpg',
		name: 'Afasin',
		text: 'Hi! How are you?',
		time: '09:11',
		userId: 'rKHRwXbT8peFUaX8PULQKKdpn9x2',
	},
	{
		image:
			'https://sammyplaysdirty.com/wp-content/uploads/2017/06/user-avatar-pic3.jpg',
		name: 'Adele',
		text: 'Hello bro',
		time: '09:11',
		userId: 'w2efqwef2w3rt',
	},
	{
		image:
			'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
		name: 'Amar',
		text: 'The unseen of spending three',
		time: '09:11',
		userId: 'w2efqwef2w3rt',
	},
]

const Conversations = () => {
	return (
		<View
			style={{
				backgroundColor: colors.DARK,
				borderRadius: 25,
				padding: 20,
				marginHorizontal: 20,
			}}
		>
			{conversations.map(conversation => (
				<ConversationItem key={conversation.name} conversation={conversation} />
			))}
		</View>
	)
}

export default Conversations
