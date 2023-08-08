import { useState, useEffect } from "react";
import axios from "axios";
import Tenant from "./Tenant"

function TenantList() {
    const [tenantList, setTenantList] = useState([]);

    //gete data drom rrails backend
    async function getTenants() {
        let response = await axios.get("http://localhost:3000/tenants",
            { headers: { Accept: "application/json" } });
        setTenantList(response.data)
        console.log(response.data)
    }
    //call above function from useEffect, will run on mount
    useEffect(() => {
        getTenants();
    }, [])

    return (
        <div>
            {
                tenantList.map(function (i, index) {
                    return (
                        <Tenant firstName={i.first_name} lastName={i.last_name} apartment={i.apartment} phone={i.phone} email={i.email}></Tenant>
                    )
                })


            }
        </div>
    )
}

export default TenantList;