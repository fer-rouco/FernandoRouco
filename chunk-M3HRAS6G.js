import{e as s,f as d,z as n}from"./chunk-CIYRZLFO.js";var u=(()=>{let i=class i{constructor(t){this.httpClient=t,this.BASE_URL="https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros",this.product=void 0}buildHeader(t){return{headers:{authorId:t}}}getAll(t){return this.httpClient.get(`${this.BASE_URL}/bp/products`,this.buildHeader(t))}create(t,e){return this.httpClient.post(`${this.BASE_URL}/bp/products`,e,this.buildHeader(t))}update(t,e){return this.httpClient.put(`${this.BASE_URL}/bp/products`,e,this.buildHeader(t))}delete(t,e){return this.httpClient.delete(`${this.BASE_URL}/bp/products?id=${e.id}`,this.buildHeader(t))}verify(t,e){return this.httpClient.get(`${this.BASE_URL}/bp/products/verification?id=${e.id}`,this.buildHeader(t))}setProduct(t){this.product=t}getProduct(){return this.product}};i.\u0275fac=function(e){return new(e||i)(d(n))},i.\u0275prov=s({token:i,factory:i.\u0275fac,providedIn:"root"});let r=i;return r})();var c="123";export{u as a,c as b};
