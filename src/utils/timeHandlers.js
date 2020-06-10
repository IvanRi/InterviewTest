import moment from 'moment';

//moment lang config
import 'moment/locale/es'
moment.locale('es')

export const formatedTime = date => moment.unix(date).format('dddd DD MMMM')

export const formatedHourlyGraphTime = date => moment.unix(date).format('hh')