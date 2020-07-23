package com.meemaw.session.location.resource;

import com.meemaw.location.model.LocationDTO;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;

@RegisterRestClient(configKey = "location-lookup-resource")
public interface LocationLookupResource {

  @GET
  @Path("/{ip}")
  @Produces("application/json")
  LocationDTO lookupByIp(@PathParam("ip") String ip, @QueryParam("access_key") String accessKey);
}
