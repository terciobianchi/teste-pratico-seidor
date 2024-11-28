import app from "../server";
import request from "supertest";

// group test using describe

describe("TEST /cars endpoints", () => {
  it("returns status code 200 if save car is passed", async () => {
    const res = await request(app)
      .post("/cars")
      .send({ id: "TESTCAR", collor: "testcar", brand: "TESTCAR" });

    expect(res.statusCode).toEqual(200);
  });

  it("returns status code 500 if try duplicity rule is passed", async () => {
    const res = await request(app)
      .post("/cars")
      .send({ id: "TESTCAR", collor: "testcar", brand: "TESTCAR" });

    expect(res.statusCode).toEqual(500);
  });  

  it("returns status code 200 and a object find by id is passed", async () => {
    const res = await request(app)
      .get("/cars/TESTCAR");

    expect(res.statusCode).toEqual(200);
    expect(res.body.id).toEqual("TESTCAR");
  });  

  it("returns status code 200 and a array if filter by collor is passed", async () => {
    const res = await request(app)
      .get("/cars?collor=testcar");

    expect(res.statusCode).toEqual(200);      
    expect(res.body.length).not.toEqual(0);
  });

  it("returns status code 200 and a array if filter by brand is passed", async () => {
    const res = await request(app)
      .get("/cars?brand=TESTCAR");
      
    expect(res.statusCode).toEqual(200);      
    expect(res.body.length).not.toEqual(0);
  });

  it("returns status code 200 if update car is passed", async () => {
    const res = await request(app)
      .put("/cars")
      .send({ id: "TESTCAR", collor: "none", brand: "NONE" });

    expect(res.statusCode).toEqual(200);    
  }); 

  it("returns status code 200 and a empty array if filter by collor is passed", async () => {
    const res = await request(app)
      .get("/cars?collor=testcar");
      
    expect(res.statusCode).toEqual(200);      
    expect(res.body.length).toEqual(0);
  });

});


describe("TEST /drivers endpoints", () => {
  it("returns status code 200 if save driver is passed", async () => {
    const res = await request(app)
      .post("/drivers")
      .send({ id: "TESTDRIVER", name: "TESTDRIVER" });

    expect(res.statusCode).toEqual(200);
  });

  it("returns status code 500 if try duplicity rule is passed", async () => {
    const res = await request(app)
      .post("/drivers")
      .send({ id: "TESTDRIVER", name: "TESTDRIVER" });

    expect(res.statusCode).toEqual(500);
  });  

  it("returns status code 200 and a object find by id is passed", async () => {
    const res = await request(app)
      .get("/drivers/TESTDRIVER");

    expect(res.statusCode).toEqual(200);
    expect(res.body.id).toEqual("TESTDRIVER");
  });  

  it("returns status code 200 and a array if filter by name is passed", async () => {
    const res = await request(app)
      .get("/drivers?name=TESTDRIVER");
      

    expect(res.statusCode).toEqual(200);      
    expect(res.body.length).not.toEqual(0);
  });

  it("returns status code 200 if update driver is passed", async () => {
    const res = await request(app)
      .put("/drivers")
      .send({ id: "TESTDRIVER", name: "NONE" });

    expect(res.statusCode).toEqual(200);    
  }); 

  it("returns status code 200 and a empty array if filter by name is passed", async () => {
    const res = await request(app)
      .get("/drivers?name=TESTDRIVER");
      
    expect(res.statusCode).toEqual(200);      
    expect(res.body.length).toEqual(0);
  });

});


describe("TEST /movimentations endpoints", () => {
  const id = "TESTMOVIMENTAION_" + Date.now();
  it("returns status code 500 if try check car exists rule is passed", async () => {
    const res = await request(app)
      .post("/movimentations")
      .send({carId: "TESTCARNONE", driverId: "TESTDRIVER", startDate: "2024-11-28T16:40:24.379Z", description: "TEST MOVIMENTAION"});

    expect(res.statusCode).toEqual(500);
  });  

  it("returns status code 500 if try check driver exists rule is passed", async () => {
    const res = await request(app)
      .post("/movimentations")
      .send({carId: "TESTCAR", driverId: "TESTDRIVERNONE", startDate: "2024-11-28T16:40:24.379Z", description: "TEST MOVIMENTAION"});

    expect(res.statusCode).toEqual(500);
  });    

  it("returns status code 200 if create movimentation is passed", async () => {
    const res = await request(app)
      .post("/movimentations")
      .send({id: id, carId: "TESTCAR", driverId: "TESTDRIVER", startDate: "2024-11-28T16:40:24.379Z", description: "TEST MOVIMENTAION"});

    expect(res.statusCode).toEqual(200);
  });

  it("returns status code 500 if try check car in use rule is passed", async () => {
    const res = await request(app)
      .post("/movimentations")
      .send({carId: "TESTCAR", driverId: "TESTDRIVERNONE", startDate: "2024-11-28T16:40:24.379Z", description: "TEST MOVIMENTAION"});

    expect(res.statusCode).toEqual(500);
  });  

  it("returns status code 500 if try check driver in use rule is passed", async () => {
    const res = await request(app)
      .post("/movimentations")
      .send({carId: "TESTCARNONE", driverId: "TESTDRIVER", startDate: "2024-11-28T16:40:24.379Z", description: "TEST MOVIMENTAION"});

    expect(res.statusCode).toEqual(500);
  });   


  it("returns status code 200 and a array if list is passed", async () => {
    const res = await request(app)
      .get("/movimentations");
      

    expect(res.statusCode).toEqual(200);      
    expect(res.body.length).not.toEqual(0);
  });

  it("returns status code 200 if finish movimentaion is passed", async () => {
    const res = await request(app)
      .put("/movimentations")
      .send({id: id, finishDate: "2024-11-28T16:40:24.379Z"});

    expect(res.statusCode).toEqual(200);    
  }); 
 
});

describe("TEST /delete endpoints", () => {
  it("returns status code 200 if delete car is passed", async () => {
    const res = await request(app)
      .delete("/cars/TESTCAR");

    expect(res.statusCode).toEqual(200);
  });

  it("returns status code 200 if delete driver is passed", async () => {
    const res = await request(app)
      .delete("/drivers/TESTDRIVER");

    expect(res.statusCode).toEqual(200);
  });

});
