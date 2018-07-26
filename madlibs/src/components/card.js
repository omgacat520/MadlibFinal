import React, {component} from 'react';

import Input from './input';

class Card extends component {
    render() {
        return (
            <div className="card">
                {input('color') }
                {Input('Plural Noun')}
            </div>
        )
    }
}

export default Card;