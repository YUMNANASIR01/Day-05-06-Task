"use server"


interface Submit_data {
  name: string
  email: string
  phone: string
  address: string
  city: string
}

export async function post_req(data:Submit_data){
  
  const {name, email, phone, address, city} = data
  
  const res = await fetch("https://api.shipengine.com/v1/labels",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Key": "TEST_Xu8kWqadlAkz2A+kpUFkbqc4G0C6A6Nw6zEA1ZiJdKc"
    },
    body: JSON.stringify({
      "shipment": {
        "carrier_id": "se-214116",
        "service_code": "usps_priority_mail_express",
        "ship_to": {
          "name": {name},
          "phone": {phone},
          "address_line1": {address},
          "city_locality": {city},
          "state_province": "CA",
          "postal_code": "95128",
          "country_code": "US",
          "address_residential_indicator": "yes"
        },
        "ship_from": {
          "name": "jetha Lal",
          "company_name": "abc company",
          "phone": "+1 555-555-5555",
          "address_line1": "gokuldam society",
          "city_locality": "gujjrat",
          "state_province": "TX",
          "postal_code": "78731",
          "country_code": "US",
          "address_residential_indicator": "no"
        },
        "packages": [
          {
            "weight": {
              "value": 20,
              "unit": "ounce"
            },
            "dimensions": {
              "height": 10,
              "width": 15,
              "length": 15,
              "unit": "inch"
            }
          }
        ]
      }
    })
  })

  return await res.json()
}