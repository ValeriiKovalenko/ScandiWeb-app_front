import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Container.scss'

class Container extends PureComponent {
    render() {
        const { component } = this.props
        return (
            <div
                className={
                    component === 'header'
                        ? 'header-container'
                        : 'main-container'
                }
            >
                {this.props.children}
            </div>
        )
    }
}

Container.defaultProps = {
    component: 'main-container',
}

Container.propTypes = {
    component: PropTypes.string,
}
export default Container
