package com.meemaw.session.sessions.service;

import com.meemaw.session.model.SessionDTO;
import com.meemaw.session.sessions.datasource.SessionDatasource;
import com.meemaw.shared.rest.query.SearchDTO;
import java.util.Collection;
import java.util.Optional;
import java.util.UUID;
import java.util.concurrent.CompletionStage;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import lombok.extern.slf4j.Slf4j;

@ApplicationScoped
@Slf4j
public class SessionService {

  @Inject SessionDatasource sessionDatasource;

  public CompletionStage<Collection<SessionDTO>> listSessions(
      String organizationId, SearchDTO searchDTO) {
    return sessionDatasource.list(organizationId, searchDTO);
  }

  public CompletionStage<Optional<SessionDTO>> retrieveSession(UUID id, String organizationId) {
    return sessionDatasource.retrieve(id, organizationId);
  }
}
