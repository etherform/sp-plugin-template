import { printConsole } from 'skyrimPlatform'

import logger from '~/logger'
import info from '~/modInfo'

logger.info('Watch me log.')

printConsole(`Greetings from ${info.title}!`)
