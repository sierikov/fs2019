import React, {Component} from 'react'
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

class LetterheadCard extends Component {
    render() {
        return (
            <div className='col s12 m6' style={{paddingBottom: '0.75rem'}}>
                <Card>
                    <CardMedia>
                        <img src={this.props.image} alt={this.props.title}/>
                    </CardMedia>
                    <CardTitle title={this.props.title}/>
                    <CardActions>
                        <FlatButton label={this.props.action}/>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default LetterheadCard
