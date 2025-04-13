import org.springframework.stereotype.Service;

import com.admin.server.model.User;
import com.admin.server.repository.AuthRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService  {
    private final AuthRepository authRepository;

    @Transactional
    public User login(User user){
       return authRepository.save(user); 
    }
}
