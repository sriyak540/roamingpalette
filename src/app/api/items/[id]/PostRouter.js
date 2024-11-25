// import express, { Request, Response, Router } from "express";
// import Posts from "../../../components/Posts";

// const router = express.Router();

// router.get("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const post = await Posts.findById(id);

//     if ( !post ) {
//       return res.status(404).json({ error: "Item not found" });
//     }
//     res.status(200).json( post );
//   } catch ( error ) {
//     console.error( error );
//     res.status(500).json({ error: "Internal server error" });
//   }
// });


// router.put("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const data = req.body; 
//     res.status(200).json({ message: `Updating post with ID: ${id}`, data });
//   } catch ( error ) {
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// router.delete("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     res.status(200).json({ message: `Deleting item with ID: ${id}` });
//   } catch ( error ) {
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// export default router;
