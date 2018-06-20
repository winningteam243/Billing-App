import React, { Component } from 'react'
import UserService from '../../shared/services/digital.svc';
import DigitalTvDeatils from './digitaltv-deatils'
import { Panel } from 'primereact/components/panel/Panel';

class DigitalTv extends Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
        this.userService = new UserService()
    }
    componentDidMount = () => {
        this.userService.getUser()
            .then((product) => {
                this.setState({
                    products: product

                })
            })
    }

    render() {
        const produtData = this.state.products.map(produt => <DigitalTvDeatils key={produt.id} prodata={produt} />)
        return (
            <div>
                <div className="content-section implementation">

                    <Panel header="Digital-Tv" toggleable={true}  >
                        {produtData}
                    </Panel>

                </div>

            </div>
        )
    }
}
export default DigitalTv