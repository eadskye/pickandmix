

   function GetIndustry(random_industry){
    var industry = new Array("Travel", "Banking", "Business Supplies and Equipment", "Chemicals", "Commercial Real Estate",
     "Computer Games", "Consumer Electronics", "Dairy", "Defense & Space", "Design",
     "Farming", "Higher Education", "Investment Banking", "Legal Services", "Market Research",
     "Media Production", "Mining & Metals", "Newspapers", "Pharmaceuticals", "Research", "Retail",
     "Think Tanks", "Utilities", "Writing and Editing");
    var random_industry = industry[Math.floor(Math.random() * industry.length)];
   document.getElementById("message").innerHTML=random_industry;
   return random_industry;
}

function GetTrigger(random_trigger){
 var trigger = new Array("Bring an offline behaviour online", "Make it a rental",
 "Make it cheaper", "Create a marketplace", "Create original or exclusive content",
 "Simplify a process", "Make it a service / on demand", "Make it mobile native",
  "Remove features to launch a simpler product", "Target specific segment",
  "Create a full stack offering", "Build a community", "Make it peer-to-peer",
  "Target an emerging market", "Make an intermediary layer", "Remove a middleman",
  "Apply blockchain", "Democratise something expensive", "Look at startups in other markets");
 var random_trigger = trigger[Math.floor(Math.random() * trigger.length)];
document.getElementById("message1").innerHTML=random_trigger;
return random_trigger;
}

function GetStrategy(random_strategy){
var strategy = new Array("Bring an offline behaviour online", "Make it a rental",
"Make it cheaper", "Create a marketplace", "Create original or exclusive content",
"Simplify a process", "Make it a service / on demand", "Make it mobile native",
 "Remove features to launch a simpler product", "Target specific segment",
 "Create a full stack offering", "Build a community", "Make it peer-to-peer",
 "Target an emerging market", "Make an intermediary layer", "Remove a middleman",
 "Apply blockchain", "Democratise something expensive", "Look at startups in other markets");
var random_strategy = strategy[Math.floor(Math.random() * strategy.length)];
document.getElementById("message2").innerHTML=random_strategy;
return random_strategy;
}

 function combine(random_industry, random_trigger, random_strategy) {
  var all = GetIndustry(random_industry) + GetTrigger(random_trigger) + GetStrategy(random_strategy);
  return all;
 }
