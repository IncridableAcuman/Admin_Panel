import java.util.Optional;
import com.admin.server.model.User;
public interface AuthRepository extends JpaRepository<User,Long> {
    Optional<User> findByUsername(String username);  
}
