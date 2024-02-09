import React, { useEffect } from "react";
import "./mystyle.scss"

import Aos from "aos";
import "aos/dist/aos.css"

const Staples = () => {
    
    useEffect(()=>{
        Aos.init()
    },[])

    return (
        <div className="staples" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 staples-p">
                        <p>Your Daily Staples</p>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="staples-col-2">
                            <div>
                                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_atta-flour-staplesStorefront_m_480_250323_01.jpg?tr=w-1920,q=80" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="staples-col-2">
                            <div>
                                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_dals-pulses-staplesStorefront_m_480_250323_03.jpg?tr=w-1920,q=80" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="staples-col-2">
                            <div>
                                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_rice-staplesStorefront_m_480_250323_02.jpg?tr=w-1920,q=80" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="staples-col-2">
                            <div>
                                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_cooking-oils-staplesStorefront_m_480_250323_04.jpg?tr=w-1920,q=80" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="staples-col-2">
                            <div>
                                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_dry-fruits-staplesStorefront_m_480_250323_05.jpg?tr=w-1920,q=80" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="staples-col-2">
                            <div>
                                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_salt-staplesStorefront_m_480_250323_06.jpg?tr=w-1920,q=80" />
                            </div>
                        </div>
                    </div>


                    <div className="col-sm-12 staples-p">
                        <p>Beverages</p>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="staples-col-2">
                            <div>
                                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_health-drinks-&-supplements_480_250923.jpg?tr=w-1920,q=80" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="staples-col-2">
                            <div>
                                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_tea-&-coffee_480_250923.jpg?tr=w-1920,q=80" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="staples-col-2">
                            <div>
                                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_flavoured-&-soya-milk_480_250923.jpg?tr=w-1920,q=80" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="staples-col-2">
                            <div>
                                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_juices_480_250923.jpg?tr=w-1920,q=80" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="staples-col-2">
                            <div>
                                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_energy-drinks_480_250923.jpg?tr=w-1920,q=80" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="staples-col-2">
                            <div>
                                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_soft-drinks-&-more_480_250923.jpg?tr=w-1920,q=80" />
                            </div>
                        </div>
                    </div>


                    <div className="col-sm-12 staples-p">
                        <p>Snacks Store</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="staples-col-2">
                            <div>
                                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/09ece9f7-7ac9-4d1e-afbb-f8ac572add38/hp_sbf_m_biscuits-&-namkeens_480_250923.jpg?tr=w-1920,q=80" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="staples-col-2">
                            <div>
                                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/09ece9f7-7ac9-4d1e-afbb-f8ac572add38/hp_sbf_m_breakfast-cereals_480_250923.jpg?tr=w-1920,q=80" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="staples-col-2">
                            <div>
                                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/09ece9f7-7ac9-4d1e-afbb-f8ac572add38/hp_sbf_m_pasta-sauces-&-more_480_270723.jpg?tr=w-1920,q=80" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="staples-col-2">
                            <div>
                                <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/09ece9f7-7ac9-4d1e-afbb-f8ac572add38/hp_sbf_m_sweet-cravings_480_250923.jpg?tr=w-1920,q=80" />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Staples