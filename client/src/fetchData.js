import React, { useState, useEffect }  from 'react'
import axios from "axios"


  const apiURL = "http://localhost:5050"

  export const apiFetch = axios.create({
    baseURL: apiURL,
  })


