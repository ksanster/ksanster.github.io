const r=t=>new Intl.NumberFormat("en-US",{notation:"compact",compactDisplay:"short",maximumFractionDigits:2}).format(t).replace(/(\d)([A-Z])/,"$1 $2");export{r as g};
