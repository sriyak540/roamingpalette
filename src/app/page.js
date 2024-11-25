  // "use client";

  // import React, {useState} from "react";
  // import App from './App';
  // import express from 'express';

  // export default function Home() {

  //   return(
  //     <div> 
  //       <App />
  //     </div>
  //   );
  // }

import express from 'express';
import connectDB from './db.js'; // Path to your `db.js`

const app = express();

// Connect to the database
connectDB();

app.use(express.json());

// Your routes go here


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
