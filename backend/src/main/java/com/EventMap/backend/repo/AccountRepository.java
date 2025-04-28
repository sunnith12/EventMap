package com.EventMap.backend.repo;

import org.springframework.stereotype.Repository;
import com.EventMap.backend.entity.AccountDetails;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface AccountRepository extends JpaRepository<AccountDetails, String>{

}
