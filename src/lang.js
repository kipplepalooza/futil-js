import _ from 'lodash/fp'

export let throws = x => { throw x }
export let isNotNil = _.negate(_.isNil)
export let exists =  isNotNil