// Sample hierarchical data
const treeData = {
    name: "Root",
    children: [
        {
            name: "Child 1",
            children: [
                { name: "Grandchild 1" },
                { name: "Grandchild 2" },
            ]
        },
        {
            name: "Child 2",
            children: [
                { name: "Grandchild 3" },
                { name: "Grandchild 4" },
                { name: "Grandchild 5" },
            ]
        }
    ]
};

// Set the dimensions and margins of the diagram
const margin = { top: 20, right: 120, bottom: 20, left: 120 },
      width = 800 - margin.right - margin.left,
      height = 600 - margin.top - margin.bottom;

// Create a tree layout
const tree = d3.tree().size([height, width]);

// Create an SVG element
const svg = d3.select("svg")
   
