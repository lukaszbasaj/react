import React, {Component} from 'react';
import Typography from 'material-ui/Typography';

class Header extends Component {
    render() {
        return (
            <Typography type="display2"
                        gutterBottom
                        align="center"
            >
                My tasks
            </Typography>
        )
    }
}

export default Header;