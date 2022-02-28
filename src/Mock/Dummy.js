import moment from 'moment';
import uuid from 'react-native-uuid';
import { Images } from 'Constants'

/**
 * Define and export the dummy data.
 */
export const SendMoneyRecords = [
    {
        id: uuid.v4(),
        img: require('Assets/images/plus.png'),
    },
    {
        id: uuid.v4(),
        avatar: require('Assets/images/avatar2.png'),
        name: 'Mike',
    },
    {
        id: uuid.v4(),
        avatar: require('Assets/images/avatar3.png'),
        name: 'Joshpeh',
    },
    {
        id: uuid.v4(),
        avatar: require('Assets/images/avatar4.png'),
        name: 'Ashley',
    },
    {
        id: uuid.v4(),
        avatar: require('Assets/images/avatar4.png'),
        name: 'xxxxx',
    },
];

export const Services = [
    {
        id: uuid.v4(),
        img: require('Assets/images/send_money.png'),
        name: 'Send Money',
    },
    {
        id: uuid.v4(),
        img: require('Assets/images/receive_money.png'),
        name: 'Receive Money',
    },
    {
        id: uuid.v4(),
        img: require('Assets/images/mobile_prepaid.png'),
        name: 'Mobile Prepaid',
    },
    {
        id: uuid.v4(),
        img: require('Assets/images/electricity_bill.png'),
        name: 'Electricity Bill',
    },

    {
        id: uuid.v4(),
        img: require('Assets/images/cashback_offer.png'),
        name: 'Cashback Offer',
    },
    {
        id: uuid.v4(),
        img: require('Assets/images/movie_tickets.png'),
        name: 'Movie Tickets',
    },
    {
        id: uuid.v4(),
        img: require('Assets/images/flight_tickets.png'),
        name: 'Flight Tickets',
    },
    {
        id: uuid.v4(),
        img: require('Assets/images/more_options.png'),
        name: 'More Options',
    },
];

export const Lessons = [
    {
        id: uuid.v4(),
        label: 'Category cource',
        name: 'Category cource',
        img: Images.categoryCource
    },
    {
        id: uuid.v4(),
        label: 'Reading',
        name: 'Reading',
        img: Images.grammary
    },
    {
        id: uuid.v4(),
        label: 'Listening',
        name: 'Listening',
        img: Images.listening
    },
    {
        id: uuid.v4(),
        label: 'Speaking',
        name: 'Speaking',
        img: Images.speacing
    },
    {
        id: uuid.v4(),
        label: 'Writing',
        name: 'Writing',
        img: Images.writing
    },
    {
        id: uuid.v4(),
        label: 'Grammary',
        name: 'Grammary',
        img: Images.grammar
    },
    {
        id: uuid.v4(),
        label: 'Check Writing',
        name: 'Check Writing',
        img: Images.repitions
    },
]

export const GrammaryTest = [
    {
        id: uuid.v4(),
        answare: 'Could you tell me your surname?',
        variants: [
            {
                variant: 'Would you like me to spell it?'
            },
            {
                variant: 'Do you like my family name?'
            },
            {
                variant: 'How do I say that?'
            }
        ],
    },
    {
        id: uuid.v4(),
        answare: 'This plant looks dead',
        variants: [
            {
                variant: `It's in the garden`
            },
            {
                variant: 'It only needs some water'
            },
            {
                variant: `It's sleeping`
            }
        ],
    },
    {
        id: uuid.v4(),
        answare: 'I hope it doesnt rain',
        variants: [
            {
                variant: 'Of course not'
            },
            {
                variant: 'Will it be wet'
            },
            {
                variant: 'So do I'
            }
        ],
    },
    {
        id: uuid.v4(),
        answare: 'Are you going to come inside soon?',
        variants: [
            {
                variant: 'For ever'
            },
            {
                variant: 'Not long'
            },
            {
                variant: 'In a minute'
            }
        ],
    },
    {
        id: uuid.v4(),
        answare: 'Who gave you this book, Lucy',
        variants: [
            {
                variant: 'I bougth it.'
            },
            {
                variant: 'For my birthday'
            },
            {
                variant: 'My uncle was'
            }
        ],
    },
    {
        id: uuid.v4(),
        answare: 'Shall we go out for pizza tonight?',
        variants: [
            {
                variant: 'I know that'
            },
            {
                variant: `It's very good`
            },
            {
                variant: `I'm too tired`
            }
        ],
    },
    {
        id: uuid.v4(),
        answare: 'do you mind if I come too?',
        variants: [
            {
                variant: `That's fine`
            },
            {
                variant: `I'd like to`
            },
            {
                variant: `I don't know if I con`
            }
        ],
    },
]

const dummyData = { SendMoneyRecords, Services, Lessons, GrammaryTest };

export default dummyData;
